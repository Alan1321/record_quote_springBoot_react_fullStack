package com.example.backend.service;

import com.example.backend.model.Quote;
import com.example.backend.repository.QuoteRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class QuoteServiceImpl implements QuoteService{

    @Autowired
    private QuoteRepository quoteRepository;

    @Override
    public Quote saveQuote(Quote quote) {
        return quoteRepository.save(quote);
    }

    @Override
    public List<Quote> getAllQuote() {
        return quoteRepository.findAll();
    }

    @Override
    public List<Quote> deleteQuote(int id) {
        quoteRepository.deleteById(id);
        return quoteRepository.findAll();
    }

    @Override
    public void replaceQuote(int id, Quote quote){
        Quote quote_in_db = quoteRepository.findById(id).get();
        quote_in_db.setQuote(quote.getQuote());
        quoteRepository.save(quote_in_db);
    }
}
