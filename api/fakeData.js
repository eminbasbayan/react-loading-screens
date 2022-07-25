const user = {
  id: 1,
  username: "emin",
  avatar:
    "https://images.pexels.com/photos/91227/pexels-photo-91227.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
};

const videos = [
  {
    id: 1,
    title: "Using Formik and Material-UI to Build Better Forms in React",
    views: "8.1M",
    date: "1 week ago",
    duration: "54:00",
    img: "https://i.ytimg.com/vi/MV9NC3FoCmM/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLBwWXXbllctLVltz9sGgGmD2LPj3Q",
    channel: {
      name: "SimpleTut",
      avatar:
        "https://yt3.ggpht.com/ytc/AKedOLTsKLZyiYjoifCrQoCoFBa3xXr7uUqf1veLi1Qhhw=s68-c-k-c0x00ffffff-no-rj",
    },
  },
  {
    id: 2,
    title: "React Form Validation (Formik)",
    views: "1.1M",
    date: "2 weeks ago",
    img: "https://i.ytimg.com/vi/MzZlYUgYXZM/hqdefault.jpg?sqp=-oaymwEcCOADEI4CSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLA4rjqxs2aSwlvtEEOvJ6Cio7GDcA",
    duration: "59:00",
    channel: {
      name: "Bilgisayar Genetiği",
      avatar:
        "https://yt3.ggpht.com/QNct0Hwj2cRk3x8x4DsHcRHOfogezNgNw9faXtm3wm4hgVxIm14G6z16UVQtbzEYb7etnpnZ54o=s68-c-k-c0x00ffffff-no-rj",
    },
  },
  {
    id: 3,
    title: "Javascript Interview Questions ( Var, Let and Const )",
    views: "420K",
    date: "2 days ago",
    img: "https://i.ytimg.com/vi/oUWRxJ19gfE/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLDdv7Oe5NB2PVjTybVyVvXBhZCc8Q",
    duration: "8:00:00",
    channel: {
      name: "RoadsideCoder",
      avatar:
        "https://yt3.ggpht.com/G42b4i9auAhu-cy3wi9IhLxmkfl2i_iokiVgHx32xsZ8I4ok6uzamWXUj16xzJmAGoq8fRfS1Q=s68-c-k-c0x00ffffff-no-rj",
    },
  },
  {
    id: 4,
    title: "Junior vs Senior React Folder Structure",
    views: "820K",
    date: "1 week ago",
    img: "https://i.ytimg.com/vi/UUga4-z7b6s/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLA1twlAOcnXAgGMgKBqbXRLA7WX9Q",
    duration: "16:00",
    channel: {
      name: "Web Dev Simplified",
      avatar:
        "https://yt3.ggpht.com/ytc/AKedOLQpvSjzSCSo8ZKCjBZS7TRX7omb_kyQirh2zgEY=s68-c-k-c0x00ffffff-no-rj",
    },
  },
  {
    id: 5,
    title: "Typesafe APIs (tRPC) // Create a Simple Demo Project",
    views: "134K",
    date: "1 day ago",
    img: "https://i.ytimg.com/vi/GVqmoObbF2o/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLCsKb6URJ8HV6Cvgm1WVslWSuvhJQ",
    duration: "5:25",
    channel: {
      name: "Basarat Codes",
      avatar:
        "https://yt3.ggpht.com/j0VUiDS9sHvY1Btan-yWsVPxg5QweVlIm3z3AiBurwWJBtzttA1OCPzIq5ztGpirvDHyI5CS=s68-c-k-c0x00ffffff-no-rj",
    },
  },
  {
    id: 6,
    title: "Create 3D Site with Spline and React - Full Course",
    views: "13M",
    date: "3 days ago",
    img: "https://i.ytimg.com/vi/EJxeMbDTkVI/hqdefault.jpg?sqp=-oaymwEcCOADEI4CSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLB5MKAnqsKkfcj4ujyxlU77Yp6uag",
    duration: "01:02:59",
    channel: {
      name: "DesignCode",
      avatar:
        "https://yt3.ggpht.com/ytc/AKedOLSG2QdV_OH21196ZrsD1_2IZROJSYLRJXeOsE6BZQ=s68-c-k-c0x00ffffff-no-rj",
    },
  },
  {
    id: 7,
    title: "Make Awesome SVG Animations with CSS // 7 Useful Techniques",
    views: "3.1M",
    date: "1 month ago",
    img: "https://i.ytimg.com/vi/UTHgr6NLeEw/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLBMV5rjJrFsZGQ1nPZBKoWpQ6VFGg",
    duration: "12:20",
    channel: {
      name: "Fireship",
      avatar:
        "https://yt3.ggpht.com/ytc/AKedOLR5CDv14gL4DQ7I4gxIlBMY6u-CNsq2qfeev48R2g=s68-c-k-c0x00ffffff-no-rj",
    },
  },
  {
    id: 8,
    title: "Learn Dependency Injection and Write Better Code",
    views: "92K",
    date: "5 days ago",
    img: "https://i.ytimg.com/vi/eQ90v7HQT-Q/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLA2pcErvJgkha3auCpSJ3P3qxJWZQ",
    duration: "2:56",
    channel: {
      name: "Amigoscode",
      avatar:
        "https://yt3.ggpht.com/ytc/AKedOLRFUNsF6J0E_KURLUU3D0vqXiyhylruAKhmFqMhL3o=s68-c-k-c0x00ffffff-no-rj",
    },
  },
];

module.exports = { user, videos };
