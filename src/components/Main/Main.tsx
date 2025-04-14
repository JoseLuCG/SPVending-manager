import './Main.css';
import { Tenant, TenantList } from '../../models/dataModels/tenant';
//import searchIcon from './../../assets/icons/Search-more.svg';
import Aside from './../Aside/Aside';
import { useEffect, useState } from 'react';
import DataRow from '../DataRow/DataRow';

function Main() {
  //States:
  const [ tenants, setTenants ] = useState<TenantList>([]);

  //Functions:
  function createArrayOfTenantsExamples() {
      const tenantsArray: TenantList = [];
      const tenantExample: Tenant= {
        tenantName: "PadelPrix",
        cif: 123456789,
        phone: 611222333,
        email: "padelprix@gmail.com",
        numberOfClubs: 4
      };

      for (let idx = 0; idx < 5; idx++) {
          tenantsArray.push(tenantExample);
      }
      setTenants(tenantsArray);
  }

  useEffect(
    () => {
      createArrayOfTenantsExamples();
    }
  );

  return (
    <main>
        <Aside/>
        <section>
            <div className='table-contents'>
                <div className='header-content'>
                    <p className='infText'>Tenant List</p>
                    <button className='addButton'>+ Add tenant</button>
                    <input className='searcher' type="text" placeholder='Buscar...'/>
                </div>
                <div className='table-header'>
                    <p>Name</p>
                    <p>CIF</p>
                    <p>Phone</p>
                    <p>Email</p>
                    <p>Clubs</p>
                    <p>Actions</p>
                </div>
                {
                   tenants.map(
                    (tenantData: Tenant) => <DataRow data={tenantData} />
                  )
                }
            </div>
        </section>
    </main>
  )
}

export default Main;