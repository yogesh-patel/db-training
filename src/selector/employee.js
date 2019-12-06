import { createSelector } from 'reselect';
import _ from "lodash";

const employees = (store) => store.employee.employees;
const searchText = store => store.employee.searchText;

export const getFilteredEmployees = createSelector(
    employees,searchText,
    (employees,searchText)=>{
        if(searchText){
            console.log('selector.....');
            return _.filter(employees,(emp)=>{
               return emp.name.toUpperCase()
                   .indexOf(searchText.toUpperCase()) !== -1;
            });
        }
        return employees;
    }
)

export const getDashboardData = createSelector(
    employees,
    (employees)=>{
        console.log('Dashboard selector.....');
        const groupByRange = {};
        _.each(employees,(emp)=>{
            const salary = parseInt(emp.salary+"");
            if(salary < 10000){
                let rangeData = groupByRange["0-10000"];
                if(!rangeData){
                    groupByRange["0-10000"] = [];
                }
                groupByRange["0-10000"].push(emp);
            }else if(salary > 10000 && salary < 20000){
                let rangeData = groupByRange["10000-20000"];
                if(!rangeData){
                    groupByRange["10000-20000"] = [];
                }
                groupByRange["10000-20000"].push(emp);
            }else if(salary > 20000 && salary < 50000){
                let rangeData = groupByRange["20000-50000"];
                if(!rangeData){
                    groupByRange["20000-50000"] = [];
                }
                groupByRange["20000-50000"].push(emp);
            }else if(salary > 50000 ){
                let rangeData = groupByRange["50000"];
                if(!rangeData){
                    groupByRange["50000"] = [];
                }
                groupByRange["50000"].push(emp);
            }
        });
        return groupByRange;
    }
)


