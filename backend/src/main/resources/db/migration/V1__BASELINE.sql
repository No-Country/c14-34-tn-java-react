CREATE TABLE bdsport.flyway_schema_history (
    installed_rank INT NOT NULL,
    version VARCHAR(50),
    description VARCHAR(200) NOT NULL,
    type VARCHAR(20) NOT NULL,
    script VARCHAR(1000) NOT NULL,
    checksum INT,
    installed_by VARCHAR(100) NOT NULL,
    installed_on TIMESTAMP DEFAULT CURRENT_TIMESTAMP NOT NULL,
    execution_time INT NOT NULL,
    success BOOLEAN NOT NULL
);

INSERT INTO bdsport.flyway_schema_history (installed_rank, version, description, type, script, checksum, installed_by, execution_time, success)
VALUES (1, '1.0.0', 'Baseline', 'SQL', 'V1__Baseline.sql', NULL, 'admin', 0, TRUE);
