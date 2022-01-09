import { connect } from 'react-redux';
import React, { useEffect } from 'react';
import { DataItem } from '../../types/CustomTable';
import { getTableData, setTableData } from '../../redux/CustomTable/action';
import Row from './Row';

const CustomTable = ({ tableData, getTableData, setTableData }: { tableData: DataItem[]; getTableData: () => void; setTableData: (data: DataItem[]) => void }) => {
	useEffect(() => {
		const isExistingData = JSON.parse(localStorage.getItem('data'));
		if (isExistingData && isExistingData.length > 0) {      
			setTableData(isExistingData);
		}else{
			getTableData();
		}
	}, []);
	return (
		<table className="table table-striped table-responsive-sm custom-table">
			<thead>
				<tr>
					<th scope="col">Id</th>
					<th scope="col">Email</th>
					<th scope="col">First Name</th>
					<th scope="col">Last Name</th>
					<th scope="col">Image</th>
					<th scope="col">Action</th>
				</tr>
			</thead>
			<tbody>
				{tableData && tableData.length > 0 ? (
					tableData.map((rowItem, index) => (
						<tr key={rowItem.id.toString() + index}>
							<Row rowData={rowItem} />
						</tr>
					))
				) : (
					<tr className="text-center">
						<td colSpan={6}>No Data</td>
					</tr>
				)}
			</tbody>
		</table>
	);
};

const mapStateToProps = (state) => ({
	tableData: state.tableData.data,
});

const mapDispatchToProps = (dispatch) => ({
	getTableData: () => dispatch(getTableData()),
	setTableData: (data) => dispatch(setTableData(data)),
});

export default connect(mapStateToProps, mapDispatchToProps)(CustomTable);
