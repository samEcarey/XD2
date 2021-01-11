export const TableData = (props) =>{
  console.log(props)
        const TableData={
            table: {
                fixedHeader: false,
                showFooter: true,
                deleteRow: false,
                insertRow: false,
                isSelection: "",  // rows // cells
                selectRow: '',  // checkbox //radio
                editableCell: false,
                recordPerPage: 8,
                isUserGearTableSetting: true,
                isCollapseRows: false,
                isContextMenu: false,
                isFreezeColumn: false,
                columns: [ 
                  {
                    name: "Customer Name",
                    dataType: "text",
                    buttonText: "",
                    buttonUrl: "", 
                    formatString: "",
                    headerText: "Name",
                    isKey: true,
                    hidden: false,
                    isCollapse: false,
                    isUserGearColumnSetting: "modal",  // modal  // dropdown
                  }, 
                  
                ],
                rows: [
                  {
                    key: "1",
                    name: "Akash Patel",
                    country: "India",
                    price: 100,
                    number: 27.5,
                    percentage: 12,
                    active: 1,
                    date: "1/12/2020",
                    datetime: "October 13, 2020 11:13:00",
                    time: "3685",
                    collapseDetails: "Akash Patel is 27 years old and he is a computer programmer."
                  },
                 
                ],
              }
        }
       
    return(TableData)
}
export default TableData()