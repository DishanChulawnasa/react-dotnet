﻿// <auto-generated />
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Infrastructure;
using Microsoft.EntityFrameworkCore.Metadata;
using Microsoft.EntityFrameworkCore.Migrations;
using Microsoft.EntityFrameworkCore.Storage.ValueConversion;
using candidate.api.Context;

#nullable disable

namespace candidate.api.Migrations
{
    [DbContext(typeof(ApplicationDBContext))]
    [Migration("20250104141238_initial")]
    partial class initial
    {
        /// <inheritdoc />
        protected override void BuildTargetModel(ModelBuilder modelBuilder)
        {
#pragma warning disable 612, 618
            modelBuilder
                .HasAnnotation("ProductVersion", "9.0.0")
                .HasAnnotation("Relational:MaxIdentifierLength", 128);

            SqlServerModelBuilderExtensions.UseIdentityColumns(modelBuilder);

            modelBuilder.Entity("candidate.api.Models.DCandidate", b =>
                {
                    b.Property<int>("id")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("int");

                    SqlServerPropertyBuilderExtensions.UseIdentityColumn(b.Property<int>("id"));

                    b.Property<string>("address")
                        .IsRequired()
                        .HasColumnType("nvarchar(100)");

                    b.Property<int>("age")
                        .HasColumnType("int");

                    b.Property<string>("bloodGroup")
                        .IsRequired()
                        .HasColumnType("nvarchar(3)");

                    b.Property<string>("email")
                        .IsRequired()
                        .HasColumnType("nvarchar(100)");

                    b.Property<string>("fullName")
                        .IsRequired()
                        .HasColumnType("nvarchar(100)");

                    b.Property<string>("mobile")
                        .IsRequired()
                        .HasColumnType("nvarchar(10)");

                    b.HasKey("id");

                    b.ToTable("DCandidates");
                });
#pragma warning restore 612, 618
        }
    }
}
