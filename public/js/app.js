
const ProductList = React.createClass({
    
    handleProductUpVote(productId) {
        console.log('Up voted: ' + productId);
    },

    render() {
        const products = this.state.products.map(product => {
            return (
                <Product
                    key={'product-' + product.id}
                    id={product.id}
                    title={product.title}
                    description={product.description}
                    url={product.url}
                    votes={product.votes}
                    submitter_avatar_url={product.submitter_avatar_url}
                    product_image_url={product.product_image_url}
                    onVote={this.handleProductUpVote}
                />
            )
        });

        return (
            <div className='product-list'>
                {products}
            </div>
        )
    }
});

const Product = React.createClass({
    handleUpVote() {
        this.props.onVote(this.props.id);
    },

    render() {
        return (
            <div className='product-item'>
                <div className='image'>
                    <img src='{this.props.product_image_url}' />
                </div>
                <div className='middle aligned content'>
                    <div className='header'>
                        <a onClick={this.handleUpVote}>Upvote</a>
                        {this.props.votes}
                    </div>
                    <div className='description'>
                        <a href='{this.props.url}'>{this.props.title}</a>
                        <p>{this.props.description}</p>
                    </div>
                    <div className='extra'>
                        <span>Submitted by:</span>
                        <img src='{this.props.submitter_avatar_url}' />
                    </div>
                </div>
            </div>
        )
    }
})

ReactDOM.render(
    <ProductList />,
    document.getElementById('content')
)