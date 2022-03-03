export const testText = {
    type: "text",
    text: "Hello!"
  }


export const shareTargetContent = {
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
}