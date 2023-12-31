﻿// <auto-generated />
using System;
using Elsa.EntityFrameworkCore.Modules.Runtime;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Infrastructure;
using Microsoft.EntityFrameworkCore.Storage.ValueConversion;
using Npgsql.EntityFrameworkCore.PostgreSQL.Metadata;

#nullable disable

namespace Elsa.EntityFrameworkCore.PostgreSql.Migrations.Runtime
{
    [DbContext(typeof(RuntimeElsaDbContext))]
    partial class RuntimeElsaDbContextModelSnapshot : ModelSnapshot
    {
        protected override void BuildModel(ModelBuilder modelBuilder)
        {
#pragma warning disable 612, 618
            modelBuilder
                .HasDefaultSchema("Elsa")
                .HasAnnotation("ProductVersion", "7.0.3")
                .HasAnnotation("Relational:MaxIdentifierLength", 63);

            NpgsqlModelBuilderExtensions.UseIdentityByDefaultColumns(modelBuilder);

            modelBuilder.Entity("Elsa.Workflows.Core.State.WorkflowState", b =>
                {
                    b.Property<string>("Id")
                        .HasColumnType("text");

                    b.Property<string>("CorrelationId")
                        .HasColumnType("text");

                    b.Property<DateTimeOffset>("CreatedAt")
                        .HasColumnType("timestamp with time zone");

                    b.Property<string>("Data")
                        .HasColumnType("text");

                    b.Property<string>("DefinitionId")
                        .IsRequired()
                        .HasColumnType("text");

                    b.Property<int>("DefinitionVersion")
                        .HasColumnType("integer");

                    b.Property<string>("DefinitionVersionId")
                        .IsRequired()
                        .HasColumnType("text");

                    b.Property<long>("ExecutionLogSequence")
                        .HasColumnType("bigint");

                    b.Property<DateTimeOffset?>("FinishedAt")
                        .HasColumnType("timestamp with time zone");

                    b.Property<string>("Status")
                        .IsRequired()
                        .HasColumnType("text");

                    b.Property<string>("SubStatus")
                        .IsRequired()
                        .HasColumnType("text");

                    b.Property<DateTimeOffset>("UpdatedAt")
                        .HasColumnType("timestamp with time zone");

                    b.HasKey("Id");

                    b.HasIndex("CorrelationId")
                        .HasDatabaseName("IX_WorkflowState_CorrelationId");

                    b.HasIndex("CreatedAt")
                        .HasDatabaseName("IX_WorkflowState_CreatedAt");

                    b.HasIndex("DefinitionId")
                        .HasDatabaseName("IX_WorkflowState_DefinitionId");

                    b.HasIndex("DefinitionVersionId")
                        .HasDatabaseName("IX_WorkflowState_DefinitionVersionId");

                    b.HasIndex("UpdatedAt")
                        .HasDatabaseName("IX_WorkflowState_UpdatedAt");

                    b.HasIndex("Status", "DefinitionId")
                        .HasDatabaseName("IX_WorkflowState_Status_DefinitionId");

                    b.HasIndex("Status", "SubStatus")
                        .HasDatabaseName("IX_WorkflowState_Status_SubStatus");

                    b.HasIndex("Status", "SubStatus", "DefinitionId", "DefinitionVersion")
                        .HasDatabaseName("IX_WorkflowState_Status_SubStatus_DefinitionId_DefinitionVersion");

                    b.ToTable("WorkflowStates", "Elsa");
                });

            modelBuilder.Entity("Elsa.Workflows.Runtime.Entities.ActivityExecutionRecord", b =>
                {
                    b.Property<string>("Id")
                        .HasColumnType("text");

                    b.Property<string>("ActivityData")
                        .HasColumnType("text");

                    b.Property<string>("ActivityId")
                        .IsRequired()
                        .HasColumnType("text");

                    b.Property<string>("ActivityName")
                        .HasColumnType("text");

                    b.Property<string>("ActivityType")
                        .IsRequired()
                        .HasColumnType("text");

                    b.Property<int>("ActivityTypeVersion")
                        .HasColumnType("integer");

                    b.Property<DateTimeOffset?>("CompletedAt")
                        .HasColumnType("timestamp with time zone");

                    b.Property<bool>("HasBookmarks")
                        .HasColumnType("boolean");

                    b.Property<DateTimeOffset>("StartedAt")
                        .HasColumnType("timestamp with time zone");

                    b.Property<string>("WorkflowInstanceId")
                        .IsRequired()
                        .HasColumnType("text");

                    b.HasKey("Id");

                    b.HasIndex("ActivityId")
                        .HasDatabaseName("IX_ActivityExecutionRecord_ActivityId");

                    b.HasIndex("ActivityName")
                        .HasDatabaseName("IX_ActivityExecutionRecord_ActivityName");

                    b.HasIndex("ActivityType")
                        .HasDatabaseName("IX_ActivityExecutionRecord_ActivityType");

                    b.HasIndex("ActivityTypeVersion")
                        .HasDatabaseName("IX_ActivityExecutionRecord_ActivityTypeVersion");

                    b.HasIndex("CompletedAt")
                        .HasDatabaseName("IX_ActivityExecutionRecord_CompletedAt");

                    b.HasIndex("HasBookmarks")
                        .HasDatabaseName("IX_ActivityExecutionRecord_HasBookmarks");

                    b.HasIndex("StartedAt")
                        .HasDatabaseName("IX_ActivityExecutionRecord_StartedAt");

                    b.HasIndex("WorkflowInstanceId")
                        .HasDatabaseName("IX_ActivityExecutionRecord_WorkflowInstanceId");

                    b.HasIndex("ActivityType", "ActivityTypeVersion")
                        .HasDatabaseName("IX_ActivityExecutionRecord_ActivityType_ActivityTypeVersion");

                    b.ToTable("ActivityExecutionRecords", "Elsa");
                });

            modelBuilder.Entity("Elsa.Workflows.Runtime.Entities.StoredBookmark", b =>
                {
                    b.Property<string>("BookmarkId")
                        .HasColumnType("text");

                    b.Property<string>("ActivityTypeName")
                        .IsRequired()
                        .HasColumnType("text");

                    b.Property<string>("CorrelationId")
                        .HasColumnType("text");

                    b.Property<string>("Data")
                        .HasColumnType("text");

                    b.Property<string>("Hash")
                        .IsRequired()
                        .HasColumnType("text");

                    b.Property<string>("WorkflowInstanceId")
                        .IsRequired()
                        .HasColumnType("text");

                    b.HasKey("BookmarkId");

                    b.HasIndex(new[] { "ActivityTypeName" }, "IX_StoredBookmark_ActivityTypeName");

                    b.HasIndex(new[] { "ActivityTypeName", "Hash" }, "IX_StoredBookmark_ActivityTypeName_Hash");

                    b.HasIndex(new[] { "ActivityTypeName", "Hash", "WorkflowInstanceId" }, "IX_StoredBookmark_ActivityTypeName_Hash_WorkflowInstanceId");

                    b.HasIndex(new[] { "Hash" }, "IX_StoredBookmark_Hash");

                    b.HasIndex(new[] { "WorkflowInstanceId" }, "IX_StoredBookmark_WorkflowInstanceId");

                    b.ToTable("Bookmarks", "Elsa");
                });

            modelBuilder.Entity("Elsa.Workflows.Runtime.Entities.StoredTrigger", b =>
                {
                    b.Property<string>("Id")
                        .HasColumnType("text");

                    b.Property<string>("ActivityId")
                        .IsRequired()
                        .HasColumnType("text");

                    b.Property<string>("Data")
                        .HasColumnType("text");

                    b.Property<string>("Hash")
                        .HasColumnType("text");

                    b.Property<string>("Name")
                        .IsRequired()
                        .HasColumnType("text");

                    b.Property<string>("WorkflowDefinitionId")
                        .IsRequired()
                        .HasColumnType("text");

                    b.Property<string>("WorkflowDefinitionVersionId")
                        .IsRequired()
                        .HasColumnType("text");

                    b.HasKey("Id");

                    b.HasIndex("Hash")
                        .HasDatabaseName("IX_StoredTrigger_Hash");

                    b.HasIndex("Name")
                        .HasDatabaseName("IX_StoredTrigger_Name");

                    b.HasIndex("WorkflowDefinitionId")
                        .HasDatabaseName("IX_StoredTrigger_WorkflowDefinitionId");

                    b.HasIndex("WorkflowDefinitionVersionId")
                        .HasDatabaseName("IX_StoredTrigger_WorkflowDefinitionVersionId");

                    b.ToTable("WorkflowTriggers", "Elsa");
                });

            modelBuilder.Entity("Elsa.Workflows.Runtime.Entities.WorkflowExecutionLogRecord", b =>
                {
                    b.Property<string>("Id")
                        .HasColumnType("text");

                    b.Property<string>("ActivityData")
                        .HasColumnType("text");

                    b.Property<string>("ActivityId")
                        .IsRequired()
                        .HasColumnType("text");

                    b.Property<string>("ActivityInstanceId")
                        .IsRequired()
                        .HasColumnType("text");

                    b.Property<string>("ActivityName")
                        .HasColumnType("text");

                    b.Property<string>("ActivityType")
                        .IsRequired()
                        .HasColumnType("text");

                    b.Property<int>("ActivityTypeVersion")
                        .HasColumnType("integer");

                    b.Property<string>("EventName")
                        .HasColumnType("text");

                    b.Property<string>("Message")
                        .HasColumnType("text");

                    b.Property<string>("NodeId")
                        .IsRequired()
                        .HasColumnType("text");

                    b.Property<string>("ParentActivityInstanceId")
                        .HasColumnType("text");

                    b.Property<string>("PayloadData")
                        .HasColumnType("text");

                    b.Property<long>("Sequence")
                        .HasColumnType("bigint");

                    b.Property<string>("Source")
                        .HasColumnType("text");

                    b.Property<DateTimeOffset>("Timestamp")
                        .HasColumnType("timestamp with time zone");

                    b.Property<string>("WorkflowDefinitionId")
                        .IsRequired()
                        .HasColumnType("text");

                    b.Property<string>("WorkflowDefinitionVersionId")
                        .IsRequired()
                        .HasColumnType("text");

                    b.Property<string>("WorkflowInstanceId")
                        .IsRequired()
                        .HasColumnType("text");

                    b.Property<int>("WorkflowVersion")
                        .HasColumnType("integer");

                    b.HasKey("Id");

                    b.HasIndex("ActivityId")
                        .HasDatabaseName("IX_WorkflowExecutionLogRecord_ActivityId");

                    b.HasIndex("ActivityInstanceId")
                        .HasDatabaseName("IX_WorkflowExecutionLogRecord_ActivityInstanceId");

                    b.HasIndex("ActivityName")
                        .HasDatabaseName("IX_WorkflowExecutionLogRecord_ActivityName");

                    b.HasIndex("ActivityType")
                        .HasDatabaseName("IX_WorkflowExecutionLogRecord_ActivityType");

                    b.HasIndex("ActivityTypeVersion")
                        .HasDatabaseName("IX_WorkflowExecutionLogRecord_ActivityTypeVersion");

                    b.HasIndex("EventName")
                        .HasDatabaseName("IX_WorkflowExecutionLogRecord_EventName");

                    b.HasIndex("ParentActivityInstanceId")
                        .HasDatabaseName("IX_WorkflowExecutionLogRecord_ParentActivityInstanceId");

                    b.HasIndex("Sequence")
                        .HasDatabaseName("IX_WorkflowExecutionLogRecord_Sequence");

                    b.HasIndex("Timestamp")
                        .HasDatabaseName("IX_WorkflowExecutionLogRecord_Timestamp");

                    b.HasIndex("WorkflowDefinitionId")
                        .HasDatabaseName("IX_WorkflowExecutionLogRecord_WorkflowDefinitionId");

                    b.HasIndex("WorkflowDefinitionVersionId")
                        .HasDatabaseName("IX_WorkflowExecutionLogRecord_WorkflowDefinitionVersionId");

                    b.HasIndex("WorkflowInstanceId")
                        .HasDatabaseName("IX_WorkflowExecutionLogRecord_WorkflowInstanceId");

                    b.HasIndex("WorkflowVersion")
                        .HasDatabaseName("IX_WorkflowExecutionLogRecord_WorkflowVersion");

                    b.HasIndex("ActivityType", "ActivityTypeVersion")
                        .HasDatabaseName("IX_WorkflowExecutionLogRecord_ActivityType_ActivityTypeVersion");

                    b.HasIndex("Timestamp", "Sequence")
                        .HasDatabaseName("IX_WorkflowExecutionLogRecord_Timestamp_Sequence");

                    b.ToTable("WorkflowExecutionLogRecords", "Elsa");
                });
#pragma warning restore 612, 618
        }
    }
}
