# Session Logging Protocol

## Overview
When users indicate they want to end a session, proper logging must be performed to maintain project continuity and document progress.

## Session Logging Triggers
- User explicitly says: "end this session", "end session", "log this session"
- User asks to "wrap up", "finish up", or "close out"
- User says "goodbye", "done for now", or similar session-ending phrases

## Session Logging Steps
1. **Get Timestamp**: Run `date` command to get current timestamp
2. **Create Sessions Directory**: Ensure `sessions/` directory exists in project root
3. **Create Session Log**: Write comprehensive session summary to new file

## Session File Naming Convention
```
sessions/YYYY-MM-DD_HH-MM-SS_topic-description.md
```

## Session Log Structure
```markdown
# [Session Topic] Session
**Date**: [Full timestamp from date command]
**Duration**: [Estimated session length]
**Focus**: [Primary objective/topic]

## Session Summary
### Primary Objectives Completed ✅
[List major accomplishments]

## Key Issues Resolved
[Technical problems solved]

## Technical Implementation
[Code changes, architecture decisions]

## Files Modified/Created
### Committed to Production
[Files pushed to GitHub/production]

### Local Development Only
[Local-only files for security]

## Testing Results
[Verification of functionality]

## Business Impact
[Effect on project goals]

## Technical Capabilities Unlocked
[New features/capabilities enabled]

## Next Steps & Recommendations
[Future actions and suggestions]

## Session Outcome
[Final status and results]

---
*End of Session: [timestamp]*
```

## Critical Requirements
- **ALWAYS get fresh timestamp** with `date` command
- **Create sessions directory** if it doesn't exist
- **Document all major changes** especially code modifications
- **Note security implications** (what's committed vs local)
- **Include business context** and impact
- **List next steps** for continuity
- **Use descriptive filename** that captures session essence