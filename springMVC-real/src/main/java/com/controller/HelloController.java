package com.controller;


import com.alibaba.fastjson.JSON;
import com.dao.User;
import com.form.UserForm;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseBody;

import javax.servlet.http.HttpServletRequest;
import java.io.IOException;
import java.util.ArrayList;
import java.util.List;

@Controller     /*用注解就不需要实现Controller接口*/
/*@RestController   此类下的所有方法都不会被视图解析器解析,return返回的是数据,不是页面*/
@RequestMapping("/zong")
public class HelloController {

    /*前后端分离,其实也就是return返回的是数据库的数据,而不是页面地址,连视图解析器都不需要配置,因为根本就没页面*/
    /*http://localhost:8080/zong/first 这其实就是一个接口*/
    @RequestMapping("/first")
    @ResponseBody
    public String first(Model model) {
        String ss="我去加空格去我家也过不去文件和标签文件";
        return ss;
    }

    /*return指向同一个页面,不会冲突,能使页面复用 */
    @RequestMapping("/second")
    /*RequestParam用来解决URL参数名与方法参数名不一致*/
    /*http://localhost:8080/zong/second?akname=san*/
    public String second(@RequestParam("akname") String name, Model model) {
        //业务与数据的处理
        return "hel";
    }
    @RequestMapping("/third")
    public String third(HttpServletRequest httpServletRequest, Model model) throws IOException {
        //业务与数据的处理
        return "hel";
    }

    /*form与json学习*/
    @RequestMapping("/goStudyForm")
    public String goStudyForm(UserForm user, Model model) throws IOException {




        model.addAttribute("msg", user);
        return "index1";
    }

    /*测试json,对象工具*/
    @ResponseBody   /*此方法不会被视图解析器解析,只会return一个字符串*/
    public static List goUserList(){
        List list=new ArrayList();
        User user1=new User(1,"张三","18");
        User user2=new User(1,"张三","18");
        User user3=new User(1,"张三","18");
        User user4=new User(1,"张三","18");
        list.add(user1);
        list.add(user2);
        list.add(user3);
        list.add(user4);
        return list;
    }

    @RequestMapping("/goFastJson")
    @ResponseBody   /*此方法不会被视图解析器解析,只会return一个字符串*/
    public String goFastJson() throws IOException {
        /*java对象转json字符串*/
        String ss= JSON.toJSONString(goUserList());
        System.out.println(ss);
        /*json字符串转java对象*/
        JSON.parseObject("{name:'alden',age:18,sex:'man'}",User.class);
        /*java对象转json对象(可能要强转(jsonobject))*/
        JSON.toJSON(new User(1,"张三","12"));
        return ss;
    }

    @RequestMapping("/goThrow")
    @ResponseBody   /*此方法不会被视图解析器解析,只会return一个字符串*/
    public String goThrow() throws IOException {



        return ss;
    }
}
