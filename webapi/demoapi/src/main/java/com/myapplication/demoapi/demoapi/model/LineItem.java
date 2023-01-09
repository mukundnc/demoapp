package com.myapplication.demoapi.demoapi.model;

public class LineItem {
    public int lineNumber;
    public float quantity;
    public float price;
    public float discount;
    public String comment;

    public LineItem() {
    }

    public LineItem(int lineNumber, float quantity, float price, float discount, String comment) {
        this.lineNumber = lineNumber;
        this.quantity = quantity;
        this.price = price;
        this.discount = discount;
        this.comment = comment;
    }

    public int getLineNumber() {
        return lineNumber;
    }

    public void setLineNumber(int lineNumber) {
        this.lineNumber = lineNumber;
    }

    public float getQuantity() {
        return quantity;
    }

    public void setQuantity(float quantity) {
        this.quantity = quantity;
    }

    public float getPrice() {
        return price;
    }

    public void setPrice(float price) {
        this.price = price;
    }

    public float getDiscount() {
        return discount;
    }

    public void setDiscount(float discount) {
        this.discount = discount;
    }

    public String getComment() {
        return comment;
    }

    public void setComment(String comment) {
        this.comment = comment;
    }
}
