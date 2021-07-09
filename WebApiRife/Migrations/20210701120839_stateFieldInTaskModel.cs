using Microsoft.EntityFrameworkCore.Migrations;

namespace Rife.Api.Migrations
{
    public partial class stateFieldInTaskModel : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.AddColumn<string>(
                name: "State",
                table: "Tasks",
                nullable: true);
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropColumn(
                name: "State",
                table: "Tasks");
        }
    }
}
