

function Customer() {
    return(
        <div className="card">
            <img src='{customer.avatar}' className="card-img-top" alt='{customer.customerName}'/>
            <div className="card-body">
                <h5 className="card-title">sd</h5>
                <p className="card-text">description</p>
                <a href='{customer.userProfile}' className="btn btn-primary" target='_blank'>Go somewhere</a>
            </div>
        </div>
    )

}
export default Customer;