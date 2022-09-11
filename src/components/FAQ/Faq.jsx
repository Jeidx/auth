import React from 'react';
import { WrapMenu } from '../Dashboard/Dashboard';
import Header from '../Menu/Header';
import ListBtn from '../Menu/ListBtn';
import { CenterContent } from '../Profile/Profile';

const Faq = ({setAuth , auth}) => {
  return (
    <div>
        <Header 
            setAuth={setAuth}
            auth={auth}/>
        <WrapMenu>
            <ListBtn />
            <CenterContent>
              <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Incidunt debitis fuga unde ab doloribus? Ullam voluptate illo quis enim harum, cumque mollitia ut voluptatem, optio, quaerat laboriosam? Ipsam ipsum qui sed beatae, officiis, illum aspernatur debitis sequi nemo quae libero sint! Aut odio dolorem molestias autem quisquam quod reiciendis aperiam.</p>
            </CenterContent>
        </WrapMenu>
    </div>
  )
}

export default Faq;