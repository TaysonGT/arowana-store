export const links = [
  {
    name: "Home",
    path: "/"
  },
  {
    name: "Collections",
    path: "/products",
    children: [
      {
        text: "Winter Collection",
        path: "/products",
        children: [
          {
            text: "Men's Wear",
            path: "/products",
          },
          {
            text: "Women's Wear",
            path: "/products",
          },
          {
            text: "Kids' Wear",
            path: "/products",
          },
        ]
      },
      {
        text: "Summer Collection",
        path: "/products",
        children: [
          {
            text: "Men's Shirts",
            path: "/products",
          },
          {
            text: "Men's Shades",
            path: "/products",
          },
          {
            text: "Kids' Trousers",
            path: "/products",
          },
        ]
      },
      {
        text: "Men's Collection",
        path: "/products",
        children: [
          {
            text: "Apparel",
            path: "/products",
          },
          {
            text: "Accessories",
            path: "/products",
          },
          {
            text: "Pajamas",
            path: "/products",
          },
          {
            text: "Sweatshirts",
            path: "/products",
          },
        ]
      },

    ]
  },
  {
    name: "About",
    path: "/",
  },
  {
    name: "Contact",
    path: "/",
  }
 ]
