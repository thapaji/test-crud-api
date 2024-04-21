import form from "./FormSchema.js";

/*CREATE*/
export const insertData = (formObj) => {
    return form(formObj).save();
}

/*READ*/
export const getData = () => {
    return form.find();
}

/*UPDATE*/
export const updateData = (id, formObj) => {
    console.log(id, type);
    return form.updateOne({ "_id": id }, { $set: { ...formObj } });
}

/*DELETE*/
export const deleteData = (id) => {
    return form.deleteOne({ "_id": id });
}