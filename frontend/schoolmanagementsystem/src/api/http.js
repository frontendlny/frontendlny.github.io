import request from '@/utils/request'  

export function user(data){   //查询用户
  return request ({
      method:'get',
      url:`data/user`
  })
}  

export function login(data){   //登录
    return request ({
        method:'post',
        url:`data/login`,
        data
    })
}  

export function logout(){   //退出
    return request ({
        method:'post',
        url:`data/logout`
    })
}

 
export function logout(data){   //用户添加
  return request ({
      method:'post',
      url:`/user/create`,
      data
  })
}


export function logout(data){   //用户删除
  return request ({
      method:'post',
      url:`data/logout`,
      params: data
  })
}
