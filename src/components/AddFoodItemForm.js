import React from 'react';

const AddFoodItemForm = (props) => {
    return (
        <form onSubmit={props.addFoodItem} className="col-sm-4">
            <div>
                <div className="form-group">
                    <label className="text-white">Food Name</label>
                    <input
                        type="text"
                        name="food"
                        value={props.food}
                        onChange={props.handleInputChange}
                        className="form-control"
                    />
                </div>
                <div className="form-group">
                    <label className="text-white">Food Cost</label>
                    <input
                        type="number"
                        name="cost"
                        value={props.cost}
                        onChange={props.handleInputChange}
                        className="form-control"
                    />
                </div>
                <button className="btn btn-primary btn-block">Add Food Item</button>
            </div>
        </form>
    );
}

export default AddFoodItemForm;