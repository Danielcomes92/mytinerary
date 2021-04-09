import Slide from './Slide'

const Slider = () => {
    const citybases = [
        [
            {id: '1', country: 'Tailandia', city: 'Koh Tao', image: ''},
            {id: '2', country: 'Tailandia', city: 'Koh Tao', image: ''},
            {id: '3', country: 'Tailandia', city: 'Koh Tao', image: ''},
            {id: '4', country: 'Tailandia', city: 'Koh Tao', image: ''}
        ],
        [
            {id: '5', country: 'Tailandia', city: 'Koh Tao', image: ''},
            {id: '6', country: 'Tailandia', city: 'Koh Tao', image: ''},
            {id: '7', country: 'Tailandia', city: 'Koh Tao', image: ''},
            {id: '8', country: 'Tailandia', city: 'Koh Tao', image: ''}
        ],
        [
            {id: '9', country: 'Tailandia', city: 'Koh Tao', image: ''},
            {id: '10', country: 'Tailandia', city: 'Koh Tao', image: ''},
            {id: '11', country: 'Tailandia', city: 'Koh Tao', image: ''},
            {id: '12', country: 'Tailandia', city: 'Koh Tao', image: ''}
        ]
    ]

    return(
        <div className="carousel" data-flickity={'{ "wrapAround": true }'}>
            {
            citybases.map((cities, index) => {
                return <Slide key={index} cities={cities} />
            })
            }
        </div>  
    )
}

export default Slider;