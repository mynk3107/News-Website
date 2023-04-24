import React from 'react';

const NewsItem=(props)=>{
        let { title, description, imageUrl, newsUrl, author, date, source } = props;
        return (
            <div className='my-3'>
                <div className="card ">
                    <div style={{display:"flex",
                                  justifyContent: "flex-end",
                                  position: "absolute",
                                  right:"0"}}>
                    <span className="e badge rounded-pill bg-danger">{source}</span>
                    </div>
                    <img src={imageUrl ? imageUrl : "https://www.aljazeera.com/wp-content/uploads/2023/02/2023-02-14T103729Z_1252114464_RC2UAZ9H4AI2_RTRMADP_3_AIR-INDIA-PLANES.jpg?resize=1920%2C1440"} className="card-img-top" alt="..." />
                    <div className="card-body">
                        <h5 className="card-title">{title}</h5>
                        <p className="card-text">{description}</p>
                        <p className="card-text"><small className="text-muted">By-{author ? author : "Unknown"} on {new Date(date).toGMTString()}</small></p>
                        <a href={newsUrl} target="_blank" rel="noreferrer" className="btn btn-sm btn-dark">Read more</a>
                    </div>
                </div>
            </div>

        )
}

export default NewsItem;