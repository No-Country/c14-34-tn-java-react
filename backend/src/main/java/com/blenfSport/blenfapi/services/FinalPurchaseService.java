package com.blenfSport.blenfapi.services;

import java.math.RoundingMode;
import java.text.DecimalFormat;
import java.text.DecimalFormatSymbols;
import java.util.Date;
import java.util.List;
import java.util.Locale;
import java.util.Optional;

import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.blenfSport.blenfapi.persitence.entities.FinalPurchase;
import com.blenfSport.blenfapi.persitence.entities.PurchaseOrder;
import com.blenfSport.blenfapi.persitence.entities.ShoppingCart;
import com.blenfSport.blenfapi.persitence.entities.User;
import com.blenfSport.blenfapi.persitence.repositories.FinalPurchaseRepository;
import com.blenfSport.blenfapi.persitence.repositories.UserRepository;
import com.blenfSport.blenfapi.utils.PaymentType;

import lombok.RequiredArgsConstructor;

@Service
@Transactional
@RequiredArgsConstructor
public class FinalPurchaseService {

	private final FinalPurchaseRepository finalPurchaseRepository;
	private final UserRepository userRepository;
	private final ShoppingCartService shoppingCartService;
	private final PurchaseOrderService purchaseOrderService;

	public List<FinalPurchase> getFinalPurchaseByUser(String UserEmail) {
		return finalPurchaseRepository.findByUser_Email(UserEmail);
	}

	public void createFinalPurchase (String userEmail,PaymentType paymentType) {
		Optional<UserDetails> userOptional = userRepository.findByEmail(userEmail);
		User user = (User) userOptional.get();
		List<ShoppingCart> shoppingCartList = shoppingCartService.getListByUser(user.getEmail());
		DecimalFormat decimalFormat = new DecimalFormat("0.00",new DecimalFormatSymbols(Locale.US));
		decimalFormat.setRoundingMode(RoundingMode.DOWN);
		
		Double total = shoppingCartList.stream().mapToDouble(shoppingCartItem ->
		shoppingCartItem.getProduct().getPrice() * shoppingCartItem.getAmount()).sum();
		
		FinalPurchase finalPurchase = new FinalPurchase(Double.parseDouble(decimalFormat.format(total)),new Date(),user, paymentType);
		FinalPurchase finalPurchaseSave = finalPurchaseRepository.save(finalPurchase);
		
		for(ShoppingCart shoppingCart : shoppingCartList) {
			PurchaseOrder purchaseOrder = new PurchaseOrder();
			purchaseOrder.setProduct(shoppingCart.getProduct());
			purchaseOrder.setAmount(shoppingCart.getAmount());
			purchaseOrder.setFinalPurchase(finalPurchaseSave);
			purchaseOrderService.createPurchaseOrder(purchaseOrder);
		}
		
		shoppingCartService.cleanShoppingCart(user.getId());
	}

}
