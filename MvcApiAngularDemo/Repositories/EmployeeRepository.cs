using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using MvcApiAngularDemo.Models;

namespace MvcApiAngularDemo.Repositories
{
    static class EmployeeData
    {
        public static int GetNewID()
        {
            if (Employees.Any())
                return Employees.Max(x => x.ID) + 1;
            else
                return 1;
        }
        public static List<Employee> Employees = new List<Employee>()
        {
            new Employee()
            {
                ID = 1,
                FirstName = "James",
                MI = "H",
                LastName = "Gillam",
                NickName = "Jimmy"
            },
            new Employee()
            {
                ID = 2,
                FirstName = "Chris",
                MI = null,
                LastName = "Hargrave",
                NickName = "Chris"
            },
            new Employee()
            {
                ID = 3,
                FirstName = "Neea",
                LastName = "Rusch"
            }
        };
    };

    public class EmployeeRepository : iRepository<Employee>
    {
        private List<Employee> _employees = EmployeeData.Employees;
        public bool Delete(int id)
        {
            var index = _employees.FindIndex(x => x.ID == id);
            if (index < 0)
                return false;
            else
                _employees.RemoveAt(index);
            return true;
        }

        public Employee Get(int id)
        {
            return _employees.FirstOrDefault(x => x.ID == id);
        }

        public List<Employee> GetAll()
        {
            var retVal = _employees;
            return retVal;
        }

        public bool Save(Employee employee)
        {
            Employee _emp = _employees.FirstOrDefault(x => x.ID == employee.ID);
            if (_emp != null)
                _emp = employee;
            else
            {
                employee.ID = EmployeeData.GetNewID();
                _employees.Add(employee);
            }
            return true;
        }
    }

    public interface iRepository<T>
    {
        T Get(int id);
        List<T> GetAll();
        bool Delete(int id);
        bool Save(T item);
    }
}