-- Tabla 'facturationsInfo'
CREATE TABLE facturations_Info (
    id BIGINT AUTO_INCREMENT PRIMARY KEY,
    address VARCHAR(255) NOT NULL,
    phone_Number VARCHAR(30) NOT NULL
);

-- Tabla 'users'
CREATE TABLE users (
    id BIGINT AUTO_INCREMENT PRIMARY KEY,
    facturation_id BIGINT,
   	email VARCHAR(100) NOT NULL UNIQUE,
    password VARCHAR(255) NOT NULL,
    name VARCHAR(50) NOT NULL,
    lastname VARCHAR(50) NOT NULL,
    verify_Email BOOLEAN NOT NULL,
    age INT
);

-- Tabla 'final_purchases'
CREATE TABLE final_purchases (
    id BIGINT AUTO_INCREMENT PRIMARY KEY,
    user_id BIGINT NOT NULL,
    date DATE NOT NULL,
    payment_Type ENUM('CREDIT_CARD', 'DEBIT_CARD', 'PAYPAL', 'OTHER') NOT NULL,
    subtotal DECIMAL(10, 2) NOT NULL,
    iva DOUBLE NOT NULL,
    total DOUBLE NOT NULL
);

-- Tabla 'categories'
CREATE TABLE categories (
    id BIGINT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(255) NOT NULL
);

-- Tabla 'products'
CREATE TABLE products (
    id BIGINT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(255) NOT NULL,
    price DOUBLE NOT NULL,
    description TEXT,
    stock INT NOT NULL,
    category_id BIGINT NOT NULL,
    color ENUM('ROJO', 'VERDE', 'AZUL', 'AMARILLO', 'MORADO', 'NARANJA', 'ROSA', 'CIAN', 'MAGENTA', 'MARRÓN', 'GRIS', 'NEGRO', 'BLANCO') NOT NULL,
    size VARCHAR(50),
   	genere ENUM('HOMBRE', 'MUJER', 'UNISEX'),
    url_Img VARCHAR(300)
);

-- Tabla 'purchase_orders'
CREATE TABLE purchase_orders (
    id BIGINT AUTO_INCREMENT PRIMARY KEY,
    product_id BIGINT NOT NULL,
    amount INT NOT NULL,
    subtotal DOUBLE NOT NULL,
    final_purchase_id BIGINT,
    state BOOLEAN NOT NULL
);

-- Restricciones de clave externa
ALTER TABLE users ADD CONSTRAINT FK_User_Facturation
FOREIGN KEY (facturation_id) REFERENCES facturations_Info(id);

ALTER TABLE final_purchases ADD CONSTRAINT FK_FinalPurchase_User
FOREIGN KEY (user_id) REFERENCES users(id);

ALTER TABLE products ADD CONSTRAINT FK_Product_Category
FOREIGN KEY (category_id) REFERENCES categories(id);

ALTER TABLE purchase_orders ADD CONSTRAINT FK_PurchaseOrder_Product
FOREIGN KEY (product_id) REFERENCES products(id);

ALTER TABLE purchase_orders ADD CONSTRAINT FK_PurchaseOrder_FinalPurchase
FOREIGN KEY (final_purchase_id) REFERENCES final_purchases(id);
