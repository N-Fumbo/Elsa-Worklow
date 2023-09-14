﻿// <auto-generated />
using Elsa.EntityFrameworkCore.Modules.Labels;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Infrastructure;
using Microsoft.EntityFrameworkCore.Migrations;
using Microsoft.EntityFrameworkCore.Storage.ValueConversion;
using Npgsql.EntityFrameworkCore.PostgreSQL.Metadata;

#nullable disable

namespace Elsa.EntityFrameworkCore.PostgreSql.Migrations.Labels
{
    [DbContext(typeof(LabelsElsaDbContext))]
    [Migration("20230102202649_Initial")]
    partial class Initial
    {
        /// <inheritdoc />
        protected override void BuildTargetModel(ModelBuilder modelBuilder)
        {
#pragma warning disable 612, 618
            modelBuilder
                .HasDefaultSchema("Elsa")
                .HasAnnotation("ProductVersion", "7.0.1")
                .HasAnnotation("Relational:MaxIdentifierLength", 63);

            NpgsqlModelBuilderExtensions.UseIdentityByDefaultColumns(modelBuilder);

            modelBuilder.Entity("Elsa.Labels.Entities.Label", b =>
                {
                    b.Property<string>("Id")
                        .HasColumnType("text");

                    b.Property<string>("Color")
                        .HasColumnType("text");

                    b.Property<string>("Description")
                        .HasColumnType("text");

                    b.Property<string>("Name")
                        .IsRequired()
                        .HasColumnType("text");

                    b.Property<string>("NormalizedName")
                        .IsRequired()
                        .HasColumnType("text");

                    b.HasKey("Id");

                    b.ToTable("Labels", "Elsa");
                });

            modelBuilder.Entity("Elsa.Labels.Entities.WorkflowDefinitionLabel", b =>
                {
                    b.Property<string>("Id")
                        .HasColumnType("text");

                    b.Property<string>("LabelId")
                        .IsRequired()
                        .HasColumnType("text");

                    b.Property<string>("WorkflowDefinitionId")
                        .IsRequired()
                        .HasColumnType("text");

                    b.Property<string>("WorkflowDefinitionVersionId")
                        .IsRequired()
                        .HasColumnType("text");

                    b.HasKey("Id");

                    b.HasIndex("LabelId")
                        .HasDatabaseName("WorkflowDefinitionLabel_LabelId");

                    b.HasIndex("WorkflowDefinitionId")
                        .HasDatabaseName("WorkflowDefinitionLabel_WorkflowDefinitionId");

                    b.HasIndex("WorkflowDefinitionVersionId")
                        .HasDatabaseName("WorkflowDefinitionLabel_WorkflowDefinitionVersionId");

                    b.ToTable("WorkflowDefinitionLabels", "Elsa");
                });
#pragma warning restore 612, 618
        }
    }
}
