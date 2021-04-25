package com.site.show.controller;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;

/**
 * @author ：wujun
 * @date ：Created in 2021/4/2
 * @description：首页
 */
@Controller
public class HomePageController {

    @RequestMapping("/")
    public String index(){
        System.out.println("index页面");
        return "index";
    }
}
