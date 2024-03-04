package com.example.backend.controller;

import com.example.backend.model.Quote;
import com.example.backend.service.QuoteService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/v1/quote")
@CrossOrigin(origins = "*")
public class QuoteController {
    @Autowired
    private QuoteService QuoteService;

    @PostMapping("/")
    public String add(@RequestBody Quote Quote) {
        QuoteService.saveQuote(Quote);
        return "New Quote added";
    }

    @GetMapping("/")
    public List<Quote> list(){
        return QuoteService.getAllQuote();
    }

    @DeleteMapping("/{id}")
    @CrossOrigin
    public List<Quote> delete(@PathVariable int id) {
        QuoteService.deleteQuote(id);
        return QuoteService.getAllQuote();
    }

    @PutMapping("/{id}")
    public List<Quote> replace(@PathVariable int id, @RequestBody Quote quote) {
        QuoteService.replaceQuote(id, quote);
        return QuoteService.getAllQuote();
    }
}
