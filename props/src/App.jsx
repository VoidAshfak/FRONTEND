import Card from "./components/Card"
function App() {

    return (
        <>
            <div className="flex space-x-4" >
                <Card
                    title="Macbook Pro"
                    image="https://media.cnn.com/api/v1/images/stellar/prod/230125131405-macbook-pro-14-inch-2023-review-cnnu-7.jpg?c=original"
                />

                <Card
                    title="Macbook Air"
                    image="https://cdn.thewirecutter.com/wp-content/media/2023/06/bestlaptops-2048px-9765.jpg"
                />

                <Card
                    title="Macbook Pro"
                    image="https://media.cnn.com/api/v1/images/stellar/prod/230125131405-macbook-pro-14-inch-2023-review-cnnu-7.jpg?c=original"
                />

                <Card
                    title="Macbook Air"
                    image="https://cdn.thewirecutter.com/wp-content/media/2023/06/bestlaptops-2048px-9765.jpg"
                />
            </div>
        </>
    )
}

export default App
