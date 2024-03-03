package com.example.backend.service;

import com.example.backend.model.Quote;

import java.util.List;

public interface QuoteService {
    public Quote saveQuote(Quote Quote);
    public List<Quote> getAllQuote();

    public void deleteQuote(int id);

//    public void replaceQuote(int id);
}
