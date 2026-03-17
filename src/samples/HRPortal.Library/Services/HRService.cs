using HRPortal.Library.Models;

namespace HRPortal.Library.Services;

public class HRService
{
    public List<EmployeeData> Data { get; private set; } = new();
    public event Action? OnDataChanged;

    public Task LoadDataAsync()
    {
        Data = GetOrgChartData();
        OnDataChanged?.Invoke();
        return Task.CompletedTask;
    }

    public void UpdateAllData()
    {
        foreach (var dataRow in Data)
        {
            // Simulate live data updates - randomly adjust performance scores
            var volatility = 0.02;
            var rnd = Math.Round(Random.Shared.NextDouble(), 2);
            var changePercent = 2 * volatility * rnd;
            if (changePercent > volatility)
            {
                changePercent -= 2 * volatility;
            }

            if (dataRow.Performance.HasValue)
            {
                var changeAmount = dataRow.Performance.Value * changePercent;
                dataRow.Performance = Math.Max(0.0, Math.Min(5.0, dataRow.Performance.Value + changeAmount));
                dataRow.Performance = Math.Round(dataRow.Performance.Value, 2);
            }
        }

        OnDataChanged?.Invoke();
    }

    private static List<EmployeeData> GetOrgChartData() => new()
    {
        // Level 0 — CEO
        new EmployeeData { Id = 1,  ParentId = null, Name = "Alice Thompson",   Title = "Chief Executive Officer",       Department = "Executive",   Salary = 250000, HireDate = new DateTime(2010, 3, 1),  Status = "Active",   Location = "New York",      Performance = 4.9, Age = 52 },

        // Level 1 — C-Suite
        new EmployeeData { Id = 2,  ParentId = 1, Name = "Bob Martinez",      Title = "Chief Financial Officer",        Department = "Finance",     Salary = 190000, HireDate = new DateTime(2011, 6, 15), Status = "Active",   Location = "New York",      Performance = 4.7, Age = 48 },
        new EmployeeData { Id = 3,  ParentId = 1, Name = "David Chen",        Title = "Chief Technology Officer",       Department = "Technology",  Salary = 195000, HireDate = new DateTime(2012, 1, 10), Status = "Active",   Location = "San Francisco", Performance = 4.8, Age = 45 },
        new EmployeeData { Id = 4,  ParentId = 1, Name = "Emily White",       Title = "Chief Operating Officer",        Department = "Operations",  Salary = 185000, HireDate = new DateTime(2013, 4, 20), Status = "Active",   Location = "Chicago",       Performance = 4.6, Age = 47 },
        new EmployeeData { Id = 5,  ParentId = 1, Name = "Michael Green",     Title = "VP of Marketing",                Department = "Marketing",   Salary = 165000, HireDate = new DateTime(2014, 7, 5),  Status = "Active",   Location = "New York",      Performance = 4.5, Age = 44 },

        // Level 2 — Directors / Senior Managers
        new EmployeeData { Id = 6,  ParentId = 2, Name = "Carol Johnson",     Title = "Finance Director",               Department = "Finance",     Salary = 140000, HireDate = new DateTime(2014, 2, 1),  Status = "Active",   Location = "New York",      Performance = 4.4, Age = 42 },
        new EmployeeData { Id = 7,  ParentId = 2, Name = "Frank Wilson",      Title = "Treasury Manager",               Department = "Finance",     Salary = 125000, HireDate = new DateTime(2015, 9, 12), Status = "Active",   Location = "New York",      Performance = 4.2, Age = 39 },
        new EmployeeData { Id = 8,  ParentId = 3, Name = "Emma Davis",        Title = "Engineering Manager (Backend)",  Department = "Technology",  Salary = 145000, HireDate = new DateTime(2015, 3, 8),  Status = "Active",   Location = "San Francisco", Performance = 4.6, Age = 38 },
        new EmployeeData { Id = 9,  ParentId = 3, Name = "Fiona Scott",       Title = "Engineering Manager (Frontend)", Department = "Technology",  Salary = 142000, HireDate = new DateTime(2016, 5, 22), Status = "Remote",   Location = "Austin",        Performance = 4.5, Age = 36 },
        new EmployeeData { Id = 10, ParentId = 3, Name = "George Turner",     Title = "QA Lead",                        Department = "Technology",  Salary = 115000, HireDate = new DateTime(2017, 1, 17), Status = "Active",   Location = "San Francisco", Performance = 4.3, Age = 35 },
        new EmployeeData { Id = 11, ParentId = 4, Name = "Jack Anderson",     Title = "Operations Manager",             Department = "Operations",  Salary = 120000, HireDate = new DateTime(2015, 11, 3), Status = "Active",   Location = "Chicago",       Performance = 4.3, Age = 41 },
        new EmployeeData { Id = 12, ParentId = 4, Name = "Kate Thomas",       Title = "Project Manager",                Department = "Operations",  Salary = 110000, HireDate = new DateTime(2017, 8, 14), Status = "Active",   Location = "Chicago",       Performance = 4.1, Age = 37 },
        new EmployeeData { Id = 13, ParentId = 5, Name = "Nancy Hall",        Title = "Marketing Manager",              Department = "Marketing",   Salary = 115000, HireDate = new DateTime(2016, 4, 19), Status = "Active",   Location = "New York",      Performance = 4.4, Age = 36 },
        new EmployeeData { Id = 14, ParentId = 5, Name = "Oliver Baker",      Title = "Sales Manager",                  Department = "Marketing",   Salary = 120000, HireDate = new DateTime(2015, 10, 7), Status = "Active",   Location = "New York",      Performance = 4.3, Age = 40 },

        // Level 3 — Individual Contributors / Junior Staff
        new EmployeeData { Id = 15, ParentId = 6,  Name = "Diana Lee",        Title = "Senior Accountant",              Department = "Finance",     Salary = 95000,  HireDate = new DateTime(2017, 3, 5),  Status = "Active",   Location = "New York",      Performance = 4.0, Age = 33 },
        new EmployeeData { Id = 16, ParentId = 6,  Name = "Eric Taylor",      Title = "Accountant",                     Department = "Finance",     Salary = 75000,  HireDate = new DateTime(2019, 7, 22), Status = "Active",   Location = "New York",      Performance = 3.8, Age = 28 },
        new EmployeeData { Id = 17, ParentId = 7,  Name = "Grace Patel",      Title = "Treasury Analyst",               Department = "Finance",     Salary = 85000,  HireDate = new DateTime(2018, 1, 15), Status = "Active",   Location = "New York",      Performance = 3.9, Age = 30 },
        new EmployeeData { Id = 18, ParentId = 8,  Name = "Henry Adams",      Title = "Senior Backend Developer",       Department = "Technology",  Salary = 110000, HireDate = new DateTime(2017, 6, 12), Status = "Active",   Location = "San Francisco", Performance = 4.2, Age = 32 },
        new EmployeeData { Id = 19, ParentId = 8,  Name = "Isabella Clark",   Title = "Backend Developer",              Department = "Technology",  Salary = 90000,  HireDate = new DateTime(2019, 2, 18), Status = "Remote",   Location = "Seattle",       Performance = 4.0, Age = 29 },
        new EmployeeData { Id = 20, ParentId = 8,  Name = "James Brown",      Title = "Backend Developer",              Department = "Technology",  Salary = 88000,  HireDate = new DateTime(2020, 4, 6),  Status = "Active",   Location = "San Francisco", Performance = 3.7, Age = 27 },
        new EmployeeData { Id = 21, ParentId = 9,  Name = "Karen Miller",     Title = "Senior Frontend Developer",      Department = "Technology",  Salary = 108000, HireDate = new DateTime(2017, 9, 25), Status = "Remote",   Location = "Austin",        Performance = 4.3, Age = 33 },
        new EmployeeData { Id = 22, ParentId = 9,  Name = "Liam Harris",      Title = "Frontend Developer",             Department = "Technology",  Salary = 87000,  HireDate = new DateTime(2020, 1, 13), Status = "Active",   Location = "San Francisco", Performance = 3.8, Age = 26 },
        new EmployeeData { Id = 23, ParentId = 10, Name = "Mia Robinson",     Title = "QA Engineer",                    Department = "Technology",  Salary = 85000,  HireDate = new DateTime(2018, 5, 9),  Status = "Active",   Location = "San Francisco", Performance = 4.0, Age = 30 },
        new EmployeeData { Id = 24, ParentId = 10, Name = "Noah Martinez",    Title = "QA Engineer",                    Department = "Technology",  Salary = 82000,  HireDate = new DateTime(2019, 11, 4), Status = "Active",   Location = "San Francisco", Performance = 3.9, Age = 28 },
        new EmployeeData { Id = 25, ParentId = 11, Name = "Olivia Johnson",   Title = "Operations Analyst",             Department = "Operations",  Salary = 80000,  HireDate = new DateTime(2018, 8, 20), Status = "Active",   Location = "Chicago",       Performance = 4.1, Age = 31 },
        new EmployeeData { Id = 26, ParentId = 11, Name = "Peter Thompson",   Title = "Business Analyst",               Department = "Operations",  Salary = 82000,  HireDate = new DateTime(2019, 3, 11), Status = "Remote",   Location = "Chicago",       Performance = 3.8, Age = 29 },
        new EmployeeData { Id = 27, ParentId = 12, Name = "Quinn Lewis",      Title = "Project Analyst",                Department = "Operations",  Salary = 78000,  HireDate = new DateTime(2020, 6, 1),  Status = "Active",   Location = "Chicago",       Performance = 3.7, Age = 27 },
        new EmployeeData { Id = 28, ParentId = 13, Name = "Ryan Young",       Title = "Marketing Specialist",           Department = "Marketing",   Salary = 72000,  HireDate = new DateTime(2019, 9, 16), Status = "Active",   Location = "New York",      Performance = 3.9, Age = 28 },
        new EmployeeData { Id = 29, ParentId = 13, Name = "Sarah King",       Title = "Content Writer",                 Department = "Marketing",   Salary = 68000,  HireDate = new DateTime(2020, 2, 24), Status = "Remote",   Location = "New York",      Performance = 3.8, Age = 26 },
        new EmployeeData { Id = 30, ParentId = 14, Name = "Tyler Moore",      Title = "Sales Representative",           Department = "Marketing",   Salary = 70000,  HireDate = new DateTime(2019, 5, 7),  Status = "Active",   Location = "New York",      Performance = 4.0, Age = 30 },
        new EmployeeData { Id = 31, ParentId = 14, Name = "Uma Patel",        Title = "Sales Representative",           Department = "Marketing",   Salary = 70000,  HireDate = new DateTime(2020, 8, 19), Status = "On Leave", Location = "New York",      Performance = 3.6, Age = 27 },
    };
}
