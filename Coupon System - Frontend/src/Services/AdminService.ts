import axios from "axios";
import { CompanyModel, CustomerModel } from "../Models/BaseUserModel";
import * as AdminState from "../Redux/AdminState";
import { adminStore } from "../Redux/AdminState";

import appConfig from "../Utils/Config";


class AdminService {


    //Company Service
    public async createCompany(company: CompanyModel): Promise<CompanyModel> {

        const response = await axios.post<CompanyModel>(appConfig.createCompanyUrl, company);
        const companyRes = response.data;
        console.log("new" + companyRes)
        AdminState.adminStore.dispatch(AdminState.createCompanyAction(company));
        return companyRes;
    }

    public async updateCompany(company: CompanyModel): Promise<CompanyModel> {
        const response = await axios.put<CompanyModel>(appConfig.updateCompanyUrl, company);
        const udpatedCompany = response.data;
        AdminState.adminStore.dispatch(AdminState.updateCompanyAction(company));
        return udpatedCompany;
    }

    public async deleteCompany(companyId: number): Promise<void> {
        await axios.delete<CompanyModel>(appConfig.deleteCompanyUrl + companyId);
        adminStore.dispatch(AdminState.deleteCompanyAction(companyId));
    }


    public async getCompany(companyId: number): Promise<CompanyModel> {
        const response = await axios.get<CompanyModel>(appConfig.getCompanyUrl + companyId);
        const comapany = response.data;
        adminStore.dispatch(AdminState.getCompanyAction(companyId));
        return comapany;
    }

    public async getCompanyByEmail(email: string): Promise<CompanyModel> {
        const response = await axios.get<CompanyModel>(appConfig.getCompanyByEmailUrl + email);
        const comapany = response.data;
        return comapany;
    }

    public async getAllCompanies(): Promise<CompanyModel[]> {
        const response = await axios.get<CompanyModel[]>(appConfig.getAllCompaniesUrl);
        const companies = response.data;
        return companies;
    }

    //Customer Service
    public async createCustomer(customer: CustomerModel): Promise<CustomerModel> {
        const response = await axios.post<CustomerModel>(appConfig.createCustomerUrl, customer);
        const customerRes = response.data;
        AdminState.adminStore.dispatch(AdminState.createCustomerAction(customer));
        return customerRes;
    }

    public async updateCustomer(customer: CustomerModel): Promise<CustomerModel> {
        const response = await axios.put<CustomerModel>(appConfig.updateCustomerUrl, customer);
        const udpatedCustomer = response.data;
        AdminState.adminStore.dispatch(AdminState.updateCustomerAction(customer));
        return udpatedCustomer;
    }

    public async deleteCustomer(customerId: number): Promise<void> {
        await axios.delete<CustomerModel>(appConfig.deleteCustomerUrl + customerId);
        AdminState.adminStore.dispatch(AdminState.deleteCustomerAction(customerId));
    }


    public async getCustomer(customerId: number): Promise<CustomerModel> {
        const response = await axios.get<CustomerModel>(appConfig.getCustomerUrl + customerId);
        const customer = response.data;
        adminStore.dispatch(AdminState.getCustomerAction(customerId));
        return customer;
    }

    public async getCustomerByEmail(email: string): Promise<CustomerModel> {
        const response = await axios.get<CustomerModel>(appConfig.getCustomerByEmailUrl + email);
        const customer = response.data;
        return customer;
    }

    public async getAllCustomers(): Promise<CustomerModel[]> {
        const response = await axios.get<CustomerModel[]>(appConfig.getAllCustomersUrl);
        const customers = response.data;
        return customers;
    }

}

const adminService = new AdminService();

export default adminService;