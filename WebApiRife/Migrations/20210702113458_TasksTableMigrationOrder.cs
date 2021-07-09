using Microsoft.EntityFrameworkCore.Migrations;

namespace Rife.Api.Migrations
{
    public partial class TasksTableMigrationOrder : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.AddColumn<int>(
                name: "Order",
                table: "Tasks",
                nullable: false,
                defaultValue: 0);
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropColumn(
                name: "Order",
                table: "Tasks");
        }
    }
}
