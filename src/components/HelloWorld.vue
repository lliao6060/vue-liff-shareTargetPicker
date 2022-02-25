<template>
<div class="hello">
  <button @click="sendTargetPicker">Send Sample</button>
</div>
</template>

<script>
import {
  onMounted
} from "vue";
import liff from "@line/liff";
export default {
  name: "HelloWorld",
  setup() {
    onMounted(async () => {
      try {
        await liff.init({
          liffId: process.env.VUE_APP_SHARE_ID,
        });
        if (!liff.isLoggedIn())
          liff.login({
            redirectUri: window.location.href,
          });
      } catch (err) {
        console.log(`liff.state init error ${err}`);
      }
    });
    async function sendTargetPicker() {
      if (!liff.isLoggedIn()) {
        liff.login({
          redirectUri: window.location.href,
        });
      }
      if (liff.isApiAvailable('shareTargetPicker')) {
        liff.shareTargetPicker([
          // {
          //   type: "text",
          //   text: "Hello!"
          // }
          {
            type: 'flex',
            altText: "Hello!",
            contents: {
              type: 'bubble',
              body: {
                type: 'box',
                layout: 'vertical',
                contents: [
                  {
                    type: 'image',
                    url: "https://d24o4k0vdyt0z8.cloudfront.net/quote.user.uploads/20210531/6577448d23e8318154ca18d2dd21afc121401a69bc3f4f483eca396d74fec7c2af1b155bb84dc5c745d4967f55be6724a38b53cf9404695a515f292697daab15.jpg",
                    size: 'full',
                    aspectRatio: '13:14',
                    aspectMode: 'cover',
                    gravity: 'center',
                  },
                ],
                paddingAll: '0px',
              },
              footer: {
                type: 'box',
                layout: 'vertical',
                contents: [
                  {
                    type: 'button',
                    action: {
                      type: 'uri',
                      label: "金銀喵官網!",
                      uri: "https://kimyimcats-stage.fingergame.com/index.html",
                    },
                  },
                ],
                flex: 0,
              },
            },
          },
        ])
        .then(function(res) {
          if (res) {
            // succeeded to send message in TargetPicker
            console.log(`[${res.status}] Message [${this.msgType}] is sent!`)
          } else {
            // canceled to send message
            console.log('TargetPicker was closed!')
          }
        }).catch(function(error) {
          // something wrong happened before sending message properly
          console.log(error, 'something wrong happen')
        })
      }
    }
    return {
      sendTargetPicker,
    };
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->

<style scoped>
h3 {
  margin: 40px 0 0;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 10px;
}

a {
  color: #42b983;
}
</style>
