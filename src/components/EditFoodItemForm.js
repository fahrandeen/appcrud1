import React from 'react';

const EditFoodItemForm = (props) => {
    return (
        <form className="col-sm-4">
            <div>
                <div className="form-group">
                    <label className="text-white">Food name</label>
                    <input
                        type="text"
                        name="food"
                        value={props.food}
                        onChange={props.handleInputChange}
                    />
                </div>
                <div className="form-group">
                    <label className="text-white">Food cost</label>
                    <input
                        type="number"
                        name="cost"
                        value={props.cost}
                        onChange={props.handleInputChange}
                    />
                </div>
                <button  className="btn btn-primary btn-block" onClick={props.updateFoodItem}>Update</button>
                <button  className="btn btn-primary btn-block" onClick={()=>props.setEditing(false)}>Cancel</button>
            </div>
        </form>
    );
}

export default EditFoodItemForm;