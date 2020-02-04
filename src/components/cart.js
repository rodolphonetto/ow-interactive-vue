export const getProductsOnCart = () => {
  const productsOnCart = localStorage.getItem("products")
  if (productsOnCart) {
    const cartProducts = JSON.parse(productsOnCart)
    return cartProducts
  }
  return []
}

export const addNewProduct = productsOnCart => {
  localStorage.setItem("products", JSON.stringify(productsOnCart))
}

export const changeQtd = (productsOnCart, name, newQtd) => {
  const newCartProducts = productsOnCart.map(product => {
    if (product.prodName === name) {
      product.qtd = newQtd
      return product
    } else {
      return product
    }
  })
  localStorage.setItem("products", JSON.stringify(newCartProducts))
}

export const removeProduct = (productsOnCart, name) => {
  const newCartProducts = productsOnCart.filter(product => {
    return product.prodName != name
  })
  localStorage.setItem("products", JSON.stringify(newCartProducts))
}
export const cleanCart = () => {
  localStorage.removeItem("products")
}
