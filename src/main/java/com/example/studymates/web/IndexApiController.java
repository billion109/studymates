package com.example.studymates.web;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class IndexApiController {
    @GetMapping("/api/v1/index")
    public String save() {
        return "INDEX";
    }
}
