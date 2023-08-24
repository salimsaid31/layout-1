class Home extends Component {

    constructor (props) {
        super(props); {
            this.state = {
                products: {
                    title: "Iphone5",
                    description: "Iphone5Iph one5Iphone5Ip hone5Iphone5 Iphone5Iphone5 Iphone5",
                    price: 200
                }
            }
        }
    }

    componentDiMmount() {
        // axious.get('https.....').then((response) => this.setState({ products: response.data }))
        axious.post('', this.state.products).then(response => console.log(response))
        axious.post('http..', this.state.products).then((response) => console.log(response.data))
        axious.delete('https.....' + id).then((response => console.log(response.data)))
        axious.delete('https.....' + this.state.x).then((response => console.log(response.data)))

        axious.patch('https......' + this.state.x, this.state.updatproducts).then((response) => console.log(response.data))
    }


    componentDidUpdate(prevProps, prevState, snapshot) {

    }
    shouldComponentUpdate(nextprops, nextState) {
        if (this.state.x == nextState.x) {

            return false
        } else {
            console.log("shouldComponentupdate")
            return true
        }
    }

    componentWillunmount() {

    }
    render() {
        <div>
            <p>welcome to learn ComponentDidUpdate fu </p>
            <button onClick={ () => { this.setState({ x: this.sttate.x + 1 }) } } >click me</button>
            <button onClick={ () => { this.setState({ x: this.state.x - 1 }) } } >click me</button>
            <button onClick={ () => { this.setState({ x: 0 }) } } ></button>
        </div>
    }
}
// 38