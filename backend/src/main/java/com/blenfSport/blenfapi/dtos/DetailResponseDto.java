package com.blenfSport.blenfapi.dtos;

import com.blenfSport.blenfapi.persitence.entities.Detail;
import com.blenfSport.blenfapi.persitence.entities.FinalPurchase;
import com.blenfSport.blenfapi.persitence.entities.Product;
import com.blenfSport.blenfapi.utils.PaymentType;

import java.util.ArrayList;
import java.util.Date;
import java.util.List;

public record DetailResponseDto(List<ProductInfo> products, Integer amount, List<FinalPurchaseInfo> finalPurchases) {

    public static record ProductInfo(String productName, double productPrice, String productImageUrl) {
        public ProductInfo(Product product) {
            this(product.getName(), product.getPrice(), product.getUrlImg());
        }
    }

    public static record FinalPurchaseInfo(Long id, Date date, PaymentType paymentType, Double subtotal, Double iva, Double total) {
        public FinalPurchaseInfo(FinalPurchase finalPurchase) {
            this(finalPurchase.getId(), finalPurchase.getDate(), finalPurchase.getPaymentType(), finalPurchase.getSubtotal(), finalPurchase.getIva(), finalPurchase.getTotal());
        }
    }

    public DetailResponseDto(Detail detail) {
        this(List.of(new ProductInfo(detail.getProduct())), detail.getAmount(), extractFinalPurchases(detail.getFinalPurchase()));
    }

    public static List<FinalPurchaseInfo> extractFinalPurchases(List<FinalPurchase> finalPurchases) {
        List<FinalPurchaseInfo> finalPurchaseInfoList = new ArrayList<>();
        for (FinalPurchase purchase : finalPurchases) {
            finalPurchaseInfoList.add(new FinalPurchaseInfo(purchase));
        }
        return finalPurchaseInfoList;
    }
    public static List<FinalPurchaseInfo> extractFinalPurchases(FinalPurchase finalPurchase) {
        return List.of(new FinalPurchaseInfo(finalPurchase));
    }
}

