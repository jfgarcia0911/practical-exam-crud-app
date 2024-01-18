using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using practical_exam_app.Server.Models;
using System.Data;
using System.Data.SqlClient;

namespace practical_exam_app.Server.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class ContactController : ControllerBase
    {
        private IConfiguration _configuration;

        public ContactController(IConfiguration configuration)
        {
                _configuration = configuration;
        }


        [HttpGet]
        public JsonResult Get()
        {
            string query = "select * from dbo.Contacts";
            string sqlDataSource = _configuration.GetConnectionString("DefaultConnection");
            DataTable dataTable = new DataTable();

            SqlDataReader reader;
            using(SqlConnection conn = new SqlConnection(sqlDataSource))
            {
                conn.Open();
                using(SqlCommand cmd = new SqlCommand(query, conn))
                {
                    reader = cmd.ExecuteReader();
                    dataTable.Load(reader);
                    reader.Close();
                    conn.Close();
                }
            }

            return new JsonResult(dataTable);
        }



        [HttpPost]
        public JsonResult Post(ContactModel contact)
        {
            string query = "insert into dbo.Contacts values (@FirstName, @LastName, @Email, @Phone )";
            string sqlDataSource = _configuration.GetConnectionString("DefaultConnection");
            DataTable dataTable = new DataTable();

            SqlDataReader reader;
            using (SqlConnection conn = new SqlConnection(sqlDataSource))
            {
                conn.Open();
                using (SqlCommand cmd = new SqlCommand(query, conn))
                {
                    cmd.Parameters.AddWithValue("@FirstName", contact.FirstName);
                    cmd.Parameters.AddWithValue("@LastName", contact.LastName);
                    cmd.Parameters.AddWithValue("@Email", contact.Email);
                    cmd.Parameters.AddWithValue("@Phone", contact.Phone);
                    reader = cmd.ExecuteReader();
                    dataTable.Load(reader);
                    reader.Close();
                    conn.Close();
                }
            }

            return new JsonResult("Added Successfully");
        }


        [HttpPut]
        public JsonResult Put(ContactModel contact)
        {
            string query = "update dbo.Contacts set FirstName=@FirstName, LastName=@LastName, Email=@Email, Phone=@Phone where ContactId=@ContactId";
            string sqlDataSource = _configuration.GetConnectionString("DefaultConnection");
            DataTable dataTable = new DataTable();

            SqlDataReader reader;
            using (SqlConnection conn = new SqlConnection(sqlDataSource))
            {
                conn.Open();
                using (SqlCommand cmd = new SqlCommand(query, conn))
                {
                    cmd.Parameters.AddWithValue("@ContactId", contact.ContactId);
                    cmd.Parameters.AddWithValue("@FirstName", contact.FirstName);
                    cmd.Parameters.AddWithValue("@LastName", contact.LastName);
                    cmd.Parameters.AddWithValue("@Email", contact.Email);
                    cmd.Parameters.AddWithValue("@Phone", contact.Phone);
                    reader = cmd.ExecuteReader();
                    dataTable.Load(reader);
                    reader.Close();
                    conn.Close();
                }
            }

            return new JsonResult("Updated Successfully");
        }


        [HttpDelete("{id}")]
        public JsonResult Delete(int id)
        {
            string query = "delete from dbo.Contacts where ContactId=@ContactId";
            string sqlDataSource = _configuration.GetConnectionString("DefaultConnection");
            DataTable dataTable = new DataTable();

            SqlDataReader reader;
            using (SqlConnection conn = new SqlConnection(sqlDataSource))
            {
                conn.Open();
                using (SqlCommand cmd = new SqlCommand(query, conn))
                {
                    cmd.Parameters.AddWithValue("@ContactId", id);
                    reader = cmd.ExecuteReader();
                    dataTable.Load(reader);
                    reader.Close();
                    conn.Close();
                }
            }

            return new JsonResult("Deleted Successfully");
        }

    }
}
