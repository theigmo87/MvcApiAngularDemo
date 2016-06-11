using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;
using MvcApiAngularDemo.Models;
using MvcApiAngularDemo.Repositories;

namespace MvcApiAngularDemo
{
    public class EmployeeController : ApiController
    {
        private EmployeeRepository _repo = new EmployeeRepository();
        // GET api/<controller>
        public IEnumerable<Employee> GetAll()
        {
            return _repo.GetAll();
        }

        // GET api/<controller>/5
        public Employee Get(int id)
        {
            return _repo.Get(id);
        }

        // POST api/<controller>
        public void Post(Employee employee)
        {
            _repo.Save(employee);
        }

        // PUT api/<controller>/5
        public void Put(Employee employee)
        {
            _repo.Save(employee);
        }

        // DELETE api/<controller>/5
        public void Delete(int id)
        {
            _repo.Delete(id);
        }
    }
}