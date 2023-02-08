import { createStore } from "redux";
import { CompanyModel, CustomerModel } from "../Models/BaseUserModel";

export class AdminState {
    public company: CompanyModel = null;
    public customer: CustomerModel = null
    public companies: CompanyModel[] = [];
    public customers: CustomerModel[] = [];
}

export enum adminActionType {
    createCompany,
    updateCompany,
    deleteCompany,
    getCompany,
    getAllCompanies,

    createCustomer,
    updateCustomer,
    deleteCustomer,
    getCustomer,
    getAllCustomers
}

export interface AdminAction {
    type: adminActionType;
    payload: any;
}

export function createCompanyAction(comapany: CompanyModel): AdminAction {
    return { type: adminActionType.createCompany, payload: comapany };
}

export function updateCompanyAction(company: CompanyModel): AdminAction {
    return { type: adminActionType.updateCompany, payload: company };
}

export function deleteCompanyAction(companyId: number): AdminAction {
    return { type: adminActionType.deleteCompany, payload: companyId };
}

export function getCompanyAction(companyId: number): AdminAction {
    return { type: adminActionType.getCompany, payload: companyId };
}

export function getAllCompaniesAction(companies: CompanyModel[]): AdminAction {
    return { type: adminActionType.getAllCompanies, payload: companies };
}


export function createCustomerAction(customer: CustomerModel): AdminAction {
    return { type: adminActionType.createCustomer, payload: customer };
}

export function updateCustomerAction(customer: CustomerModel): AdminAction {
    return { type: adminActionType.updateCustomer, payload: customer };
}

export function deleteCustomerAction(customerId: number): AdminAction {
    return { type: adminActionType.deleteCustomer, payload: customerId };
}

export function getCustomerAction(customerId: number): AdminAction {
    return { type: adminActionType.getCustomer, payload: customerId };
}

export function getAllCustomersAction(customers: CustomerModel[]): AdminAction {
    return { type: adminActionType.getAllCustomers, payload: customers };
}



export function adminReducer(currentState = new AdminState(), action: AdminAction): AdminState {

    const newState = { ...currentState };

    switch (action.type) {

        case adminActionType.createCompany:
            newState.companies = action.payload;
            break;

        case adminActionType.createCustomer:
            newState.customers = action.payload;
            break;

        case adminActionType.updateCompany:
            const indexToUpdateCompany = newState.companies.findIndex(c => c.id === action.payload.id);
            newState.companies[indexToUpdateCompany] = action.payload;
            break;

        case adminActionType.updateCustomer:
            const indexToUpdateCustomer = newState.customers.findIndex(c => c.id === action.payload.id);
            newState.customers[indexToUpdateCustomer] = action.payload;
            break;
    }

    return newState;
}

export const adminStore = createStore(adminReducer);
