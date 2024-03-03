package com.example.backend.service;

import com.example.backend.model.Quote;
import com.example.backend.repository.QuoteRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class QuoteServiceImpl implements QuoteService{

    @Autowired
    private QuoteRepository QuoteRepository;

    @Override
    public Quote saveQuote(Quote Quote) {
        return QuoteRepository.save(Quote);
    }

    @Override
    public List<Quote> getAllQuote() {
        return QuoteRepository.findAll();
    }

    @Override
    public void deleteQuote(int id) {
        QuoteRepository.deleteById(id);
    }

//    @Override
//    public void replaceQuote(int id){
//        QuoteRepository.
//    }
}
