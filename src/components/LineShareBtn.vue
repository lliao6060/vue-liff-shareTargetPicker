<template>
<div class="line-share-btn">
  <button @click="sendTargetPicker">Send Sample</button>
</div>
</template>

<script>
import { onMounted } from "vue";
import liff from "@line/liff";
import { shareTargetContent } from '../line-liff/share-content'
export default {
  name: "LineShareBtn",
  setup() {
    onMounted(async () => {
      try {
        await liff.init({
          liffId: process.env.VUE_APP_SHARE_ID,
        });
        if (!liff.isLoggedIn())
          console.log('user is not login !')
          // liff.login({
          //   redirectUri: window.location.href,
          // });
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
          shareTargetContent
        ])
        .then(function(res) {
          if (res) {
            // succeeded to send message in TargetPicker
            console.log('msg is sent!')
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
