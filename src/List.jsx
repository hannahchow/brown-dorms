import React, { Component } from 'react';




class List extends Component {
    renderList() {
        const items = this.props.items.map(item => {
            if(item.time_text != null) {
                var distance = <div id="walking"><h5>Walking time to location: {item.time_text}</h5></div>
            }
            return (
                <li key={item.name}>
                    <img alt={"photo of " + item.name} src={item.img}/>
                    <h3><i className="fa fa-home"></i> {item.name}</h3>
                    <div id="map-box"><h4><i className="fa fa-map-marker"></i> <a href={item.brownMap} target="_blank"> Map</a></h4></div>
                    {distance}
                    <p><span><i className="fa fa-building-o"></i>  Built:</span> {item.built}</p>
                    <p><span><i className="fa fa-users"></i>    Number of Rooms:</span> {item.numRooms === -1 ? "Rooms not granted through Housing Lottery" : item.numRooms}</p>
                    <p><span><i className="fa fa-wheelchair"></i>    Accessibility:</span> {item.accessible ? "Accessible" : "Non-Accessible"}</p>
                    <p><span><i className="fa fa-cutlery"></i> Kitchens:</span> {item.kitchens}</p>
                    <p><span><i className="fa fa-bath"></i>    Bathroom Type:</span> {item.bathrooms}</p>
                    <p><span><i className="fa fa-institution"></i>    Program Housing?</span> {item.program}</p>
                    <p>{item.description} </p>
                    
                </li>)
        });

        return items;
    }

    render() {
        return (
            <ul>
                {this.renderList()}
            </ul>
        );
    }
}

export default List;