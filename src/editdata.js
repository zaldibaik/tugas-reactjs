// Edit.js
import React, { useState } from "react";
import { Button, TextInput, Table } from "flowbite-react";

const Edit = ({ data, setData }) => {
  const [editIndex, setEditIndex] = useState(null);
  const [editValue, setEditValue] = useState("");
  const [editMataKuliah, setEditMataKuliah] = useState("");
  const [editNilai, setEditNilai] = useState("");
  
  const editData = (index) => {
    setEditIndex(index);
    const item = data[index];
    setEditValue(item.nama);
    setEditMataKuliah(item.mataKuliah);
    setEditNilai(item.nilai);
  };

  const updateData = () => {
    const newData = [...data];
    newData[editIndex] = {
      nama: editValue,
      mataKuliah: editMataKuliah,
      nilai: editNilai
    };
    setData(newData);
    setEditIndex(null);
  };

  return (
    <>
      {editIndex !== null && (
        <div>
          <TextInput
            className="mb-2 block"
            type="text"
            value={editValue}
            onChange={(e) => setEditValue(e.target.value)}
            placeholder="Nama"
          />
          <TextInput
            type="text"
            value={editMataKuliah}
            onChange={(e) => setEditMataKuliah(e.target.value)}
            placeholder="Mata Kuliah"
          />
          <TextInput
            type="text"
            value={editNilai}
            onChange={(e) => setEditNilai(e.target.value)}
            placeholder="Nilai"
          />
          <Button className="block" onClick={updateData}>
            Simpan
          </Button>
        </div>
      )}
      <Table.Cell>
        <button onClick={() => editData(index)}>Edit</button>
      </Table.Cell>
    </>
  );
};

export default Edit;
