package com.example.backend.service;

import com.example.backend.model.Quote;

import java.util.List;

public interface QuoteService {
    public Quote saveQuote(Quote quote);
    public List<Quote> getAllQuote();

    public List<Quote> deleteQuote(int id);

    public void replaceQuote(int id, Quote quote);
}
