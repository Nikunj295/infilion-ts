import React, { useState } from 'react';
import { connect } from 'react-redux';
import { deleteTableData, editTableData } from '../../redux/CustomTable/action';
import { DataItem } from '../../types/CustomTable';

interface RowProps {
	rowData: DataItem;
	deleteTableData: (id: string | number) => void;
	editTableData: (data: DataItem) => void;
}

//Renders one object of array row's JSX.
const Row = ({ rowData, editTableData, deleteTableData }: RowProps) => {
	//Take new Data
	const [newRowData, setNewRowData] = useState<DataItem | null>(rowData);
	const [editMode, setEditMode] = useState<boolean>(false);
	const updateData = (event) => {
		setNewRowData({...newRowData, [event.target.name]: event.target.value });
	};

	return (
		<>
			{Object.keys(rowData).map((item, index) => {
				return (
					<td key={index}>
						{editMode ? (
							<input name={item} onChange={updateData} value={newRowData[item]} />
						) : item.includes('avatar') ? (
							<img className="table-avatar-image" src={newRowData[item]} alt="avatar_image" />
						) : (
							newRowData[item]
						)}
					</td>
				);
			})}
			<td>
				<div className="row-edit">
					{editMode? (
						<button
							className="btn btn-primary m-1 p-2"
							onClick={() => {
								setEditMode(!editMode);
								editTableData(newRowData);
							}}>
							Save
						</button>
					) : (
						<button
							className="btn btn-success m-1 p-2"
							onClick={() => {
								setEditMode(!editMode);
								setNewRowData(newRowData);
							}}>
							Edit
						</button>
					)}
					<button className="btn btn-danger m-1 p-2" onClick={() => deleteTableData(rowData.id)}>
						Delete
					</button>
				</div>
			</td>
		</>
	);
};

const mapStateToProps = (state) => ({
	tableData: state.tableData.data,
});

const mapDispatchToProps = (dispatch) => ({
	editTableData: (data) => dispatch(editTableData(data)),
	deleteTableData: (id) => dispatch(deleteTableData(id)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Row);
