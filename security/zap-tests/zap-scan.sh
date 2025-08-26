#!/bin/bash
set -e

TARGET_URL="https://test-api.k6.io"

echo "Starting OWASP ZAP baseline scan for $TARGET_URL"

# Run ZAP Baseline Scan (Passive scan only, safe for CI/CD)
docker run --rm -v $(pwd):/zap/wrk/:rw -t ghcr.io/zaproxy/zaproxy:stable \
    zap-baseline.py -t $TARGET_URL -r zap-report.html -J zap-report.json

echo "ZAP scan completed. Reports generated:"
ls -lh zap-report.*
