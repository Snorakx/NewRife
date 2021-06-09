using Microsoft.EntityFrameworkCore.Migrations;

namespace Rife.Api.Migrations
{
    public partial class INIT2 : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropColumn(
                name: "Level",
                table: "MyUsers");

            migrationBuilder.DropColumn(
                name: "WorkedHours",
                table: "MyUsers");
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.AddColumn<int>(
                name: "Level",
                table: "MyUsers",
                type: "int",
                nullable: false,
                defaultValue: 0);

            migrationBuilder.AddColumn<int>(
                name: "WorkedHours",
                table: "MyUsers",
                type: "int",
                nullable: false,
                defaultValue: 0);
        }
    }
}
