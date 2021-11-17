package xjtu.sad.zbsj.user.test;

import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/user/test")
public class UserAPI {

    @RequestMapping("hello")
    public String test(){
        return "接口测试，可删除！";
    }
}
