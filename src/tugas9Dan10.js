import React, { useState } from "react";
import { Button, Card, TextInput, Table } from "flowbite-react";

const CrudExample = () => {
  const [data, setData] = useState([]);
  const [inputValue, setInputValue] = useState("");
  const [inputMataKuliah, setInputMataKuliah] = useState("");
  const [inputNilai, setInputNilai] = useState("");

  // Create
  const addData = () => {
    if (inputValue && inputMataKuliah && inputNilai) {
      const newData = {
        nama: inputValue,
        mataKuliah: inputMataKuliah,
        nilai: inputNilai
      };
      setData([...data, newData]);
      setInputValue("");
      setInputMataKuliah("");
      setInputNilai("");
    }
  };

  // Read
  const displayData = data.map((item, index) => (
    <Table.Row key={index}>
      <Table.Cell>{item.nama}</Table.Cell>
      <Table.Cell>{item.mataKuliah}</Table.Cell>
      <Table.Cell>{item.nilai}</Table.Cell>
      <Table.Cell>
        <button onClick={() => deleteData(index)}>Delete</button>
      </Table.Cell>
    </Table.Row>
  ));

  // Delete
  const deleteData = (index) => {
    const newData = [...data];
    newData.splice(index, 1);
    setData(newData);
  };

  return (
    <div className="container mx-auto ">
      <Table>
        <Table.Head>
          <Table.HeadCell>Nama</Table.HeadCell>
          <Table.HeadCell>Mata Kuliah</Table.HeadCell>
          <Table.HeadCell>Nilai</Table.HeadCell>
          <Table.HeadCell>Action</Table.HeadCell>
          <Table.HeadCell>
            <span className="sr-only">Edit</span>
          </Table.HeadCell>
        </Table.Head>
        <Table.Body>{displayData}</Table.Body>
      </Table>
      <br></br>
      <Card className="max-auto">
        <form className="flex flex-col p-6 gap-4">
          <TextInput
            className="mb-2 block"
            type="text"
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
            placeholder="Nama"
          />
          <TextInput
            type="text"
            value={inputMataKuliah}
            onChange={(e) => setInputMataKuliah(e.target.value)}
            placeholder="Mata Kuliah"
          />
          <TextInput
            type="text"
            value={inputNilai}
            onChange={(e) => setInputNilai(e.target.value)}
            placeholder="Nilai"
          />
          <Button className="block" onClick={addData}>
            Tambah
          </Button>
        </form>
      </Card>
    </div>
  );
};

const Tugas9 = () => {
  return (
    <div className="overflow-x-auto">
      <CrudExample />
    </div>
  );
};

export default Tugas9;
