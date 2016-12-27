const ProductList = React.createClass({
    render() {
        return (
            <div className='product-list'>
                <Product />
            </div>
        )
    }
});

const Product = React.createClass({
    render() {
        return <div className='product-item'>
            <div className='image'>
                <img src='imgs/product-image.png' />
            </div>
            <div className='middle aligned content'>
                <div className='description'>
                    <a>Fort Knight</a>
                    <p>Authentic renaissance actors, delivered in just two weeks.</p>
                </div>
                <div className='extra'>
                    <span>Submitted by:</span>
                    <img src='imgs/avatar.jpg' />
                </div>
            </div>
        </div>
    }
})

ReactDOM.render(
    <ProductList />,
    document.getElementById('content')
)